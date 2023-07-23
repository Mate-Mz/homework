// Function to make toys
function makeToys(delay){
    
    console.log("Making a Toy...")

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(Math.random() > 0.1){
                resolve('Undefected');
            }else{
                reject('Defected');
            }
        }, delay);
    }); 
}
// Function to sell toys
function sellToys(status, delay){

    console.log("Selling a Toy...")

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(status === 'Undefected'){
                if(Math.random() > 0.1){
                    resolve('Sold');
                }else{
                    reject('toy was unsuccessful');
                }
            }
        }, delay);
    });
}
// Function to deliver toys
function deliverToys(soldStatus, delay){

    console.log("Delivering a Toy...")

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(soldStatus === 'Sold'){
                if(Math.random() > 0.1){
                    resolve('Delivered successfully');
                }else{
                    reject('Delivery car crashed');
                }
            }
        }, delay);
    });
}

//Delay times in ms
const timeToMakeToys = 3000;
const timeToSellToys = 2000;
const timeToDeliver = 1000;

makeToys(timeToMakeToys)
    .then((status) => sellToys(status, timeToSellToys)
        .then((soldStatus) => deliverToys(soldStatus, timeToDeliver)
            .then((res) => console.log(res))
        )
    )
    .catch((err) => console.log(err));