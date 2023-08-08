// Sistema de mudar as ações da bolsa

class ObservableStock {
    constructor() {
        this.stockPrice = 0
        this.observers = []
    }

    subscribe(observer){
        this.observers.push(observer)
    }

    unsubscribe(observer){
        this.observers = this.observers.filter((obs) => obs !== observer)
    }

    setStockPrice(newPrice){
        this.stockPrice = newPrice
        this.notifyObservers()
    }

    notifyObservers(){
        this.observers.forEach(observer => observer.update(this.stockPrice))
    }
}

class UIModule {
    update(newPrice){
        // Atualiza a UI
        console.log(`Módulo UI: o preço foi atualizado para R$ ${newPrice}`)
    }
}
class AnalyticsModule {
    update(newPrice){
        // Realiza análises baseadas no novo preço
        console.log(`Módulo Analytics: processando novo preço das ações R$ ${newPrice}`)
    }
}
class NotificationsModule {
    update(newPrice){
        // Envia notificações para os usuários
        console.log(`Módulo de Notificações: notificações enviadas com o preço atualizado R$${newPrice}`)
    }
}

const stockMarket = new ObservableStock()

const uiObserver = new UIModule()
const analyticsObserver = new AnalyticsModule()
const notificationsObserver = new NotificationsModule()

stockMarket.subscribe(uiObserver)
stockMarket.subscribe(analyticsObserver)
stockMarket.subscribe(notificationsObserver)

console.log('---')
stockMarket.setStockPrice(100.50)

console.log('---')
stockMarket.setStockPrice(105.20)
stockMarket.unsubscribe(uiObserver)

console.log('---')
stockMarket.setStockPrice(110.80)