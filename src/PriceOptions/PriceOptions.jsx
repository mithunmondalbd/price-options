
import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$30/month",
          "features": [
            "Access to gym facilities",
            "Standard equipment usage",
            "Locker room access",
            "Fitness classes (limited)"
          ]
        },
        {
          "id": 2,
          "name": "Premium Membership",
          "price": "$50/month",
          "features": [
            "Access to gym facilities",
            "Advanced equipment usage",
            "Locker room access",
            "Personal trainer sessions (2/month)",
            "Unlimited fitness classes",
            "Sauna and steam room access"
          ]
        },
        {
          "id": 3,
          "name": "Family Membership",
          "price": "$80/month",
          "features": [
            "Access to gym facilities for the entire family",
            "Standard equipment usage",
            "Locker room access",
            "Family locker room access",
            "Unlimited fitness classes",
            "Swimming pool access",
            "Childcare services"
          ]
        },
        {
          "id": 4,
          "name": "Student Membership",
          "price": "$20/month",
          "features": [
            "Access to gym facilities",
            "Standard equipment usage",
            "Locker room access",
            "Valid student ID required",
            "Fitness classes (limited)",
            "Study area"
          ]
        },
        {
          "id": 5,
          "name": "Corporate Membership",
          "price": "$45/month",
          "features": [
            "Access to gym facilities",
            "Standard equipment usage",
            "Locker room access",
            "Corporate group rates available",
            "Conference room access",
            "Discounted cafeteria meals"
          ]
        }
      ];
      
    return (
        <div className="max-w-6xl mx-auto my-5">
            <div className="grid md:grid-cols-3  text-white gap-4">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;