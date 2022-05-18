import id_1 from '../images/setts/assets/images/img1.jpg';
import id_2 from '../images/setts/assets/images/img2.jpg';
import id_3 from '../images/setts/assets/images/img3.jpg';
import id_4 from '../images/setts/assets/images/img4.jpg';
import id_5 from '../images/setts/assets/images/img5.jpg';
import id_6 from '../images/setts/assets/images/img6.jpg';
import id_7 from '../images/setts/assets/images/img7.jpg';




let store = {
  _state : {
    dialogs:{
        Users:
            [{id:1, name: "Roman",img:id_1},
            {id:2, name: "Oleg",img:id_2},
            {id:3, name: "Fill",img:id_3},
            {id:4, name: "Stas",img:id_4},
            {id:5, name: "Aleksey",img:id_5},
            {id:6, name: "Andrew",img:id_6},
            {id:7, name: "Ivan",img:id_7},
            {id:8, name: "Vladislav Mamonov",img:id_1}
            ],

        Current_text: 'HI!',
        Current_contact: 'Example... Olga',

        MessagesUser : 
            [{id:2, name:"Oleg",text:"Hello world"},{id:0, name:"You",text:"HI", me:true},
            {id:2, name:"Oleg",text:"Hello world"},{id:2, name:"Oleg",text:"Hello world"},
            {id:2, name:"Oleg",text:"How are you?"},{id:0, name:"You",text:"Not bad!"},
            {id:2, name:"Oleg",text:"Nice to meet you!"},{id:0, name:"You",text:"Me too"},
            {id:2, name:"Oleg",text:"ahahaha"}]           
        }
    },

    renderPage (){
        console.log();
    },
    empty( observer ){
        this.renderPage = observer;
    },

    dispatch(action){
        switch(action.type){
            case 'get-state':
                return this._state;

            case 'add-users':
                let constructor = {
                    id:this._state.dialogs.Users.length + 1,
                    name:this._state.dialogs.Current_contact
                };
                this._state.dialogs.Users.push(constructor);
                this.renderPage(this._state);
                break;

            case 'addMessage':
                let item = {
                    id:0,
                    name:"You",
                    text: this._state.dialogs.Current_text
                }
                this._state.dialogs.MessagesUser.push(item);
                this.renderPage(this._state);
                break;

            case 'current-contact':
                this._state.dialogs.Current_contact = action.contact_text;
                this.renderPage(this._state);
                break;

            case 'current-text':
                this._state.dialogs.Current_text = action.text_mes;
                this.renderPage(this._state);
                break;
        }
       
    }
}



export default store;