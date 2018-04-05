var sampleTemplate =
{
    "recordCount": 10,
    "template": [
        {
            "keyName": "poNum",
            "type": "index",
            "startAt": 450,
            "toString": true
        },
        {
            "keyName": "companyName",
            "type": "same",
            "value": "Addisons"
        },
        {
            "keyName": "deliveries",
            "type": "same",
            "value": 45
        },
        {
            "keyName": "userName",
            "type": "sequence",
            "value": ["KNolan","GKelly","VSky"],
            "startAt": 0
        },
        {
            "keyName": "userFullName",
            "type": "sequence",
            "value": ["Kevin Nolan","Grace Kelly","Vanilla Sky"],
            "startAt": 0
        }
    ]
};

var sampleJSON = 

[
    {
      "poNumber": "22",
      "poItemNum": "00010",
      "scheduleLine": "0001",
      "deliveryDate": "/Date(1502668800000)/",
      "statDeliveryDate": "/Date(1502668800000)/",
      "dateChangeReason": "",
      "schedQuantity": "5.000",
      "orderUnit": "EA",
      "grQuantity": "234",
      "openQuantity": "99999",
      "confirm": "",
      "penaliseKPIs": "",
      "cycleNum": "22",
      "certNum": "2000"
    },
    {
      "poNumber": "23",
      "poItemNum": "00010",
      "scheduleLine": "0002",
      "deliveryDate": "/Date(1502668800000)/",
      "statDeliveryDate": "/Date(1502841600000)/",
      "dateChangeReason": "",
      "schedQuantity": "2.000",
      "orderUnit": "EA",
      "grQuantity": "235",
      "openQuantity": "100000",
      "confirm": "",
      "penaliseKPIs": "",
      "cycleNum": "23",
      "certNum": "2001"
    },
    {
      "poNumber": "24",
      "poItemNum": "00010",
      "scheduleLine": "0003",
      "deliveryDate": "/Date(1502668800000)/",
      "statDeliveryDate": "/Date(1502841600000)/",
      "dateChangeReason": "",
      "schedQuantity": "2.000",
      "orderUnit": "EA",
      "grQuantity": "236",
      "openQuantity": "100001",
      "confirm": "",
      "penaliseKPIs": "",
      "cycleNum": "24",
      "certNum": "2002"
    }
  ];


