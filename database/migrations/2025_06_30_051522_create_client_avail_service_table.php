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
        Schema::create('client_avail_service', function (Blueprint $table) {
            $table->id();
            $table->string('sq_num');
            $table->foreignId('client_id')->constrained('client');
            $table->foreignId('group_id')->constrained('service');
            $table->foreignId('service_id')->constrained('service');
            $table->date('proposal_date')->nullable();
            $table->year('project_year')->nullable();
            $table->string('contract_duration', 255)->nullable();
            $table->string('agreement_status', 255);
            $table->enum('is_open_agreement', ['YES', 'NO'])->default('NO');
            $table->date('date_signed');
            $table->string('project_status', 255)->nullable();
            $table->integer('license_count')->nullable();
            $table->enum('availment_status', ['New', 'Ongoing', 'For Renewal'])->default('New');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('client_avail_service');
    }
};
