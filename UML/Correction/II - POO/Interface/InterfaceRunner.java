package fr.dtek.dms.core.service.service.formation.Interface;

import org.junit.Test;

public class InterfaceRunner {
    @Test
    public void runApplication() {
        // Doctor
        PersonInterface doctor = new Doctor();
        doctor.walk();
        doctor.run();

        System.out.print("\n---------------------------------------------------------------------\n");

        // Doctor
        PersonInterface soldier = new Soldier();
        soldier.walk();
        soldier.run();
    }
}