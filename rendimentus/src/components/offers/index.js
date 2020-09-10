import React, { useState, useEffect } from 'react';

export const Offers = ()=>{
fetch(` https://jsonbox.io/box_ddb0ab5da8d69da8c315/offers`)
.then( function(response){
  return response.json()
})
.then(function(data){ 
  console.log(data)})
return <div>Ola</div>
}