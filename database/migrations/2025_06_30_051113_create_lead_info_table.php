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

        Schema::create('lead_status', function (Blueprint $table) {
            $table->id();
            $table->string('status_name', 255);
            $table->text('description');
            $table->timestamps();
        });
        Schema::create('lead_info', function (Blueprint $table) {
            $table->id();
            $table->foreignId('company_id')->constrained('company');
            $table->date('date_added');
            $table->date('rt_date');
            $table->text('recommended_services')->nullable();
            $table->text('key_decision_maker')->nullable();
            $table->text('challenges')->nullable();
            $table->text('remarks')->nullable();
            $table->text('needs_or_requirements')->nullable();
            $table->text('website')->nullable();
            $table->text('timeline')->nullable();
            $table->text('lead_source')->nullable();
            $table->date('initial_contact_date')->nullable();
            $table->date('follow_up_date')->nullable();
            $table->date('last_contacted')->nullable();
            $table->integer('days_last_contacted')->nullable();
            $table->text('notes')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lead_info');
    }
};
