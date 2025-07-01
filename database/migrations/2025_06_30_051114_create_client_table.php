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
        Schema::create('client', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained('company');
            $table->date('date_added');
            $table->text('organization')->nullable();
            $table->text('org_head')->nullable();
            $table->text('school_head')->nullable();
            $table->string('head_email', 255)->nullable();
            $table->string('field', 255)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('client');
    }
};
