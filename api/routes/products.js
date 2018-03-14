const express = require('express');
const router = express.Router();

router.get('/', (req,res,next)=>{
	res.status(200).json({
		message: "get request"
	});
});

router.post('/', (req,res,next)=>{
	res.status(200).json({
		message: "post request"
	});
});

router.get("/:productId",(req,res,next)=>{
	const id = req.params.productId;
	if(id === "special"){
		res.status(200).json({
			message: "special ID",
			id: id
		});
	}else{
		res.status(200).json({
			message: "not special",
			id: id
		});
	}
})

router.patch("/:productId",(req,res,next)=>{
	res.status(200).json({
		message: "update product"
	})
})

router.delete("/:productId",(req,res,next)=>{
	res.status(200).json({
		message: "delete product"
	})
})


module.exports = router;