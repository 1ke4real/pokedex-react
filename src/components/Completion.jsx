import React from 'react';

export default function Completion(props){
    return(
        <div className="w-[50%] flex p-2 hover:bg-gray-300 rounded-lg cursor-pointer bg-white m-1" key={props.id} onClick={props.action}>
            <div className="flex contents-center drop-shadow-lg" >
                <div className="h-10 w-10 rounded-sm flex items-center justify-center text-3xl mr-4">
                    <img src={props.sprite} alt=""/>
                </div>
            </div>
            <div>
                <div className="font-bold text-lg">{props.name}</div>
                <div>
                    <span>Hp : {props.hp} </span>
                    <span>Attaque : {props.attack} </span>
                    <span>Defense : {props.defense} </span>
                    <span>Attaque spécial : {props.speAttack} </span>
                    <span>Défense spécial : {props.speDefense} </span>
                    <span>Vitesse : {props.speed} </span>
                </div>
            </div>
        </div>
    )
}