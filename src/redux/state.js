
let store = {
  _state : {
    dialogs:{
        Users:
            [{id:1, name: "Roman"},
            {id:2, name: "Oleg"},
            {id:3, name: "Fill"},
            {id:4, name: "Stas"},
            {id:5, name: "Aleksey"},
            {id:6, name: "Andrew"},
            {id:7, name: "Ivan"},
            {id:8, name: "Vladislav Mamonov"}
            ],

            Current_text: 'HI!',
            Current_contact: 'Example... Olga',

            MessagesUser : 
            [{id:2, name:"Oleg",text:"Hello world"},{id:0, name:"",text:"HI", me:true},
            {id:2, name:"Oleg",text:"Hello world"},{id:2, name:"Oleg",text:"Hello world"},
            {id:2, name:"Oleg",text:"How are you?"},{id:0, name:"",text:"Not bad!"},
            {id:2, name:"Oleg",text:"Nice to meet you!"},{id:0, name:"",text:"Me too"},
            {id:2, name:"Oleg",text:"ahahaha"}]           
        }
    },
    renderPage (){
        console.log();
    },
    addUsers () {
        let constructor = {
            id:this._state.dialogs.Users.length + 1,
            name:this._state.dialogs.Current_contact
        };
        this._state.dialogs.Users.push(constructor);
        this.renderPage(this._state);
    },

    addMessage () {
    let item = {
        id:3,
        name:"Oleg",
        text: this._state.dialogs.Current_text
    }
    this._state.dialogs.MessagesUser.push(item);
    this.renderPage(this._state);
},

    currentContact (contact_text){
        this._state.dialogs.Current_contact = contact_text;
        this.renderPage(this._state);
    },

    currentText(text_mes){
        
        this._state.dialogs.Current_text = text_mes;
        this.renderPage(this._state);
        
    },

    empty( observer ){
        this.renderPage = observer;
    }
}



export default store;