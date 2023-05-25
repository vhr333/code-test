const express = require("express")
var app = express()
app.get("/",function(request,response){
response.send("Hi")
})
app.listen(3000, function () {
console.log("Test Started")
  let data = {
    "order": {
      "order_id": "SUB835690",
      "ordered_at": "2023-05-24T07:35:47-07:00",
      "shipping_status": "Unshipped",
      "order_payment_infos": [
        {
          "payment_created_at": "2023-05-24T07:35:47-07:00",
          "payment_type": "shopify_payments",
          "credit_card_last_4": "0005",
          "fee": "0.0",
          "payment_transaction_id": "8PzLZxf3CbzQ29HvptK0PuN3",
          "verified": true,
          "financed": true,
          "amount": "69.98"
        }
      ],
      "order_shipping_info": {
        "shipping_instructions": "Sku GSB949807795925: Name = iPhone XR 64GB (Unlocked) - Black / Excellent\nSku GSB949807795925: Title = iPhone XR 64GB (Unlocked)\nSku GSB949807795925: Variant_title = Black / Excellent",
        "order_shipping_contact_info": {
          "first_name": "test1",
          "last_name": "test333",
          "company_name": null,
          "address_line_1": "1223 test gdgd",
          "address_line_2": "",
          "city": "Gallatin",
          "state": "TN",
          "postal_code": "92126",
          "country_code": "US",
          "phone_number_day": "3347140942"
        },
        "order_shipments": [
          {
            "shipping_carrier": "USPS",
            "shipping_class": "First-Class Mail"
          },
          {
            "shipping_carrier": "Fedex",
            "shipping_class": "Fedex Express"
          }
        ]
      },
      "line_items": [
        {
          "item_type": "SKU",
          "quantity": 1,
          "sku": "GSB123",
        },
        {
          "item_type": "SKU",
          "quantity": 1,
          "sku": "GSB234",
        },
        {
          "item_type": "SKU",
          "quantity": 1,
          "sku": "GSB345",
        }
      ]
    }
  }

// Print order_id


// print payment_transaction_id


// Print all shipping_class


// call external api it's a GET request, you can use any package axios/node-fetch/http-request,
// you need to call external api for all line item skus
// Request URL: https://na2t44v792.execute-api.us-east-1.amazonaws.com/dev/auth/order-details/${skus}


// print external api output


});