const axios = require('axios');

// Fetch JSON data from HTTP source
async function fetchJSONData(url) {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching JSON data:', error.message);
      throw error;
    }
  }
  
  // Search function
  function searchByMonth(data, month) {
    return data.filter(item => {
      const dateOfSale = new Date(item.dateOfSale);
      return dateOfSale.getMonth() === month - 1; 
    });
  }
  
  

  module.exports.homeScr = async function (req, res){
  try {
    res.render('home',{
        user:"Ankit"
    });
  } catch (error) {
    
  }

}
  module.exports.homeScrPost = async function (req, res){
    try {
        const jsonData = await fetchJSONData('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
        let months=req.body.month;
        console.log("User : ",months);
        res.redirect('/')

        if (!months) {
            return res.status(400).json({ error: 'Month data is missing in the request body.' });
        }
    
        // Convert 'month' to a number
        // const month = parseInt(months);
        //   if (!months ||isNaN(months) || months < 1 || months > 12) {
        //     return res.status(400).json({ error: 'Invalid month. Month must be a number between 1 and 12.' });
        //   }
          const searchResults = searchByMonth(jsonData, months);
          res.render('searchResult', { results: searchResults });


    } catch (error) {
        
    }
  
    
    
    }
   
