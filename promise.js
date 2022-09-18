const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) =>{
  counter = 0;
  const IIX  = await promiseTheaterIXX();
  const VGC = await promiseTheaterVGC();
      
  for (hasil of IIX){
      if (hasil['hasil'] == emosi){
          counter++
      }
  }
  for (hasil of VGC){
      if (hasil['hasil'] == emosi){
          counter++
      }
  }
  return counter;
};

module.exports = {
  promiseOutput,
};
