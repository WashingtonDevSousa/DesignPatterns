// Loja virtua de computadores customizados


class Computer {
    constructor(type, cpu, ram, motherBoard, storage, graphicsCard, screenSize, screenResolution){
        this.type = type;
        this.cpu = cpu;
        this.ram = ram;
        this.motherBoard = motherBoard;
        this.storage = storage;
        this.graphicsCard = graphicsCard;
        this.screenSize = screenSize;
        this.screenResolution = screenResolution;
    }

    show(){
        console.log(`\nTipo: ${this.type}\nCPU: ${this.cpu}\nMemória RAM: ${this.ram}GB\nPlaca-mãe: ${this.motherBoard}\nArmazenamento: ${this.storage}\nPlaca de Vídeo: ${this.graphicsCard}\nTamanho da Tela: ${this.screenSize}\nResolução: ${this.screenResolution}`);
    };
};

const pc1 = new Computer("desktop", "AMD Ryzen 5 5600g",16,"Asus A520M",512,null,22,"Full HD");

pc1.show();

// Aplicando o Builder

class ComputerBuilder{
    setType(type){
        this.type = type;
        return this;
    }
    setCpu(cpu){
        this.cpu = cpu;
        return this;
    }
    setRam(ram){
        this.ram = ram;
        return this;
    }
    setMotherBoard(motherBoard){
        this.motherBoard = motherBoard;
        return this;
    }
    setStorage(storage){
        this.storage = storage
        return this;
    }
    setGraphicsCard(graphicsCard){
        this.graphicsCard = graphicsCard;
        return this;
    }
    setScreenSize(screenSize){
        this.screenSize = screenSize;
        return this;
    }
    setScreenResolution(screenResolution){
        this.screenResolution = screenResolution;
        return this;
    }

    build(){
        return new Computer(
            this.type,
            this.cpu,
            this.ram,
            this.motherBoard,
            this.storage,
            this.graphicsCard,
            this.screenSize,
            this.screenResolution
        )
    }
}

const builder = new ComputerBuilder()

const pc2 = builder
.setCpu("Intel Core 13 12th Gen")
.setType("Laptop")
.setRam(8)
.setScreenSize(15.6)
.setScreenResolution("Full HD")
.setStorage(256)
.build()
pc2.show()


const pc3 = builder.setCpu("Intel Core i7").setRam(16).build()


pc3.show()