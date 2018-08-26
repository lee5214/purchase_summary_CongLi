const express = require("express");
const router = express.Router();
const mock_data = {
  subtotal: 198.41,
  pickupSavings: 7.42,
  taxesAndFees: 18.62,
  total: 209.61,
  zip: "94000",
  items: [
    {
      id: "001",
      name:
        "OFM Essentials Racecar-Style Leather Gaming Chair, Multiple Colors",
      price: 101.12,
      quantity: 1,
      color: "Red",
      image:
        "https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF"
    },
    {
      id: "002",
      name:
        "OFM Essentials Racecar-Style Leather Gaming Chair, Multiple Colors",
      price: 101.12,
      quantity: 1,
      color: "Black and Gray",
      image:
        "https://i5.walmartimages.com/asr/66fae1aa-d8bc-4089-8554-c1b1fc0c6d92_1.a18ee650ed91efecab34d94b75a5ba0a.jpeg?odnHeight=100&odnWidth=100&odnBg=FFFFFF"
    }
  ]
};

router.get("/", function(req, res, next) {
  res.send(mock_data);
});

module.exports = router;
