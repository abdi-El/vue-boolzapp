const root =  new Vue({
    el: '#root',
    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },    
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        searchInput: '',
        newInput: '',
        activeChat: 0
    },
    methods:{
        chatOpen(contactIndex){
            this.activeChat = contactIndex
        },
        sendMessage(){
            newMessage = {
                date:this.getDate(),
                text: this.newInput,
                status: 'sent'
            };
            this.contacts[this.activeChat].messages.push(newMessage);
            newMessage = {}
            this.newInput = '';
            this.botAnswer(newMessage)
        },
        botAnswer(messakeObj){
            setTimeout(()=>{
                messakeObj.text = 'ok'
                messakeObj.status = 'received'
                messakeObj.date = this.getDate()
                this.contacts[this.activeChat].messages.push(messakeObj)
            }, 1000)
        },
        getDate(){
            const now = dayjs()
            return now.format('DD/MM/YYYY H:mm:ss')
        },
        search(){
            this.contacts.forEach((contact)=>{
                contact.visible = true
                if(!(contact.name.toUpperCase().includes(this.searchInput.toUpperCase()))){
                    contact.visible = false
                }
            })
        },
        showDelete(index){
            this.$refs.deleteOption[index].classList.toggle('displayNone')
        },
        deleteMessage(index){
            console.log(this.$refs.delete[index])
            this.$refs.delete[index].classList.add('displayNone')
        }
    } 
})