'use strict'

const mongoose = require('mongoose');
const Pedido = mongoose.model('Pedido');
const dbuser = require('../dbusuario'); 

exports.get = async (req, res, next) => {

    Pedido.find({})
    .populate('customer','name')
    .populate('items.product','title')
    .then(data => {
        res.status(200).send(data);
    }).catch(e => {
        res.status(400).send({
            e
        });
    });
    
 };

exports.post = async(req, res, next) => {
    let userid = dbuser.getId();
   let pedidoC ={
        "customer":userid,
        "items":[{
                "product":req.params.id
        }]
    }
    console.log(userid,req.params.id);
    var pedido = new Pedido(pedidoC);
    pedido.save()
    .then(x=>{
        res.status(201).send({
            message:'pedido realizado com sucesso'
        });
    }).catch(e =>{
        res.status(400).send({
            message:'Falha ao cadastrar pedido ',
            data:e
        });
    });
    
};
