<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('product_group', function (Blueprint $table) {
            $table->id();
            $table->string('group_name', 255);
            $table->timestamps();
        });

        Schema::create('service', function (Blueprint $table) {
            $table->id();
            $table->foreignId('group_id')->constrained('product_group');
            $table->string('service_name', 255);
            $table->float('pricing')->nullable();
            $table->string('license_type', 255)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('service');
    }
};
