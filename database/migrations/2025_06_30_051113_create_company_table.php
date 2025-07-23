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
        Schema::create('contact', function (Blueprint $table) {
            $table->id();
            $table->string('full_name', 255);
            $table->string('work_email', 255);
            $table->string('work_phone', 255);
            $table->string('position', 255);
            $table->timestamps();
        });

        Schema::create('company', function (Blueprint $table) {
            $table->id();
            $table->string('company_name', 255);
            $table->text('address');
            $table->enum('type', ['CLIENT', 'LEAD'])->default('LEAD');
            $table->foreignId('contact_id')->constrained('contact');
            $table->foreignId('assigned_to')->nullable()->constrained('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('company');
    }
};
