package fr.dtek.dms.core.service.service.formation.Interface;

public class Soldier implements PersonInterface {
    public void walk() {
        System.out.print("\nSoldier walking at 7Km\n");
    }

    public void run() {
        System.out.print("\nSoldier running at 15Km\n");
    }
}