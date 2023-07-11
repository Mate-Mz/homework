const user = {
    banks: [
        {},
        {},
        {
            address: {
                city: "YourCity"
            }
        }
    ]
};

const getCity = ({ banks: [, , { address: { city } = {} } = {}] = [] } = {}) => city;

console.log(getCity(user));

