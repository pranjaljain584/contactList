const express = require('express') ;
const path = require('path') ;
const port = 8000 ;
const app= express() ;

app.set('view engine' , 'ejs') ;
app.set('views' , path.join(__dirname , 'views')) ;
app.use(express.urlencoded()) ;
app.use(express.static('assets')) ;

var contactList = [
    {
        name : "Pranjal Jain" ,
        phone : "5793932583" 
    }
];

app.get('/' , function(req,res){

    return res.render('home' , {
        contact_list : contactList 
    }) ;

    
}) ;

app.post( '/create-contact' , function(req,res){

    contactList.push(req.body) ;

    return res.redirect('back') ;
}) ;

app.get('/delete-contact' , function(req,res){

    let phone = req.query.phone ;
    let contactIdx = contactList.findIndex(contact => contact.phone == phone) ;

    if(contactIdx != -1){
        contactList.splice(contactIdx , 1) ;
    }

    return res.redirect('back') ;
}) ;



app.listen(port , function(err){
    if(err){
        console.log("Error is present") ;
    }

    console.log("server running");
    
}) ;
