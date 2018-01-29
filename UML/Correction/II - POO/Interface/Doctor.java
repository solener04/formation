package fr.dtek.dms.core.service.service.formation.Interface;

public class Doctor implements PersonInterface {
    public void walk() {
        System.out.print("\nDoctor walking at 2Km\n");
    }

    public void run() {
        System.out.print("\nDoctor running at 9Km\n");
    }
}
