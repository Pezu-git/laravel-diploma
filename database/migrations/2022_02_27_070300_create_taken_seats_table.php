<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTakenSeatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('taken_seats', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('hall_id');
            $table->foreign('hall_id')->references('id')->on('halls')->onUpdate('cascade')->onDelete('cascade');
            $table->unsignedBigInteger('seance_id');
            $table->foreign('seance_id')->references('id')->on('movie_schedules')->onUpdate('cascade')->onDelete('cascade');
            $table->integer('row_num');
            $table->integer('seat_num');
            $table->boolean('taken')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('taken_seats');
    }
}
