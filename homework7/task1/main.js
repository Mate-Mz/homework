// Function to create a delay using Promises
function delay(ms, callback) {
    return new Promise(resolve => {
        if (typeof callback === 'function') {
            callback();
        }
        setTimeout(() => {
            resolve();
        }, ms);
    });
}

// Function to make toys
async function makeToys(delayTime) {
    await delay(delayTime, () => {
        console.log("Making a Toy...");
    });
    
    if (Math.random() > 0.1) {
        return 'Undefected';
    } else {
        return 'Defected';
    }
}

// Function to sell toys
async function sellToys(status, delayTime) {
    await delay(delayTime, () => {
        console.log("Selling a Toy...");
    });

    if (status === 'Undefected' && Math.random() > 0.1) {
        return 'Sold';
    } else {
        return 'Toy was unsuccessful';
    }
}

// Function to deliver toys
async function deliverToys(status, delayTime) {
    await delay(delayTime, () => {
        console.log("Delivering a Toy...");
    });

    if (status === 'Sold') {
        if (Math.random() > 0.1) {
            return 'Delivered successfully';
        } else {
            return 'Delivery car crashed';
        }
    } else {
        return 'Toy was unsuccessful';
    }
}

async function promisify() {
    try {
        // Delay times in ms
        const timeToMakeToys = 3000;
        const timeToSellToys = 1000;
        const timeToDeliver = 2000;

        // Making toys
        const status = await makeToys(timeToMakeToys);

        // Selling toys
        const soldStatus = await sellToys(status, timeToSellToys);

        // Delivering toys
        const result = await deliverToys(soldStatus, timeToDeliver);

        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

// Start the process
promisify();
