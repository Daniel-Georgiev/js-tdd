class Ticket {
    constructor(ticketDescriptions, sortBy){
        this.ticketDescriptions = ticketDescriptions;
        this.sortBy = sortBy;
    }

    extractDescriptions(descriptions){
        return descriptions.map((desc) => {
            const desArray = desc.split('|');
            return {
                destination: desArray[0],
                price: desArray[1],
                status: desArray[2]
            }
        });
    }
    
    sortTickets(tickets){
        if(this.sortBy === 'destination'){
            return tickets.sort((a, b) => {
                return a.destination.localeCompare(b.destination);
            })

        }else if(this.sortBy === 'price'){
            return tickets.sort((a,b) => {
                return parseFloat(a.price) - parseFloat(b.price);
            })

        }else if(this.sortBy === 'status'){
            return tickets.sort((a, b) => {
                return a.status.localeCompare(b.status);
            })
        }
    }

    print() {
        const extracted = this.extractDescriptions(this.ticketDescriptions);
        const sorted = this.sortTickets(extracted); 
        
        let result = sorted.map( item => {
            return `
        Ticket {
            destination: '${item.destination}',
            price: ${item.price},
            status: '${item.status}' }`
        }).join(',');
        result = '[' + result + ' ]';
        
        return result;
    }
}


module.exports = Ticket;