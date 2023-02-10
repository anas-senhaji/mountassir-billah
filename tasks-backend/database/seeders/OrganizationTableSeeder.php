<?php

namespace Database\Seeders;

use App\Models\Board;
use App\Models\Card;
use App\Models\Column;
use App\Models\Organization;
use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Seeder;

class OrganizationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Organization::factory(10)->create()->each(function ($organization) {
            $projects = Project::factory(2)->create([
                'organization_id' => $organization->id
            ]);

            $projects->each(function ($project) {
                $boards = Board::factory(2)->create([
                    'project_id' => $project->id
                ]);

                $boards->each(function ($board) {
                    $columns = Column::factory(2)->create([
                        'board_id' => $board->id
                    ]);

                    $columns->each(function ($column) {
                        Card::factory(4)->create([
                            'column_id' => $column->id
                        ]);
                    });
                });
            });
        });
    }
}
