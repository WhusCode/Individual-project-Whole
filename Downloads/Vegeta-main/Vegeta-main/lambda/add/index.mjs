import mysql from 'mysql'

export const handler = async (event) => {
  
  // get credentials from the db_access layer (loaded separately via AWS console)
  var pool = mysql.createPool({
      host: "calculatordb.chlxnoru1n0z.us-east-1.rds.amazonaws.com",
      user: "calcAdmin",
      password: "calc:pass",
      database: "calc"
  });
  
  let ComputeArgumentValue = (value) => {
      let numeric_value = parseFloat(value);
      if (isNaN(numeric_value)) {
          return new Promise((resolve, reject) => {
              pool.query("SELECT * FROM calc.Constants WHERE name=?",
                         [value], (error, rows) => {
                  if (error) { return reject(error) }
                  if ((rows) && (rows.length == 1)) {
                      return resolve(rows[0].value)
                  } else {
                      return reject("unable to locate constant '" + value + "'")
                  }
              });
          });
      } else {
          // this is just the constant
          return new Promise((resolve) => { return resolve(numeric_value) })
      }
  }
  
  const arg1_value = await ComputeArgumentValue(event.arg1)
  const arg2_value = await ComputeArgumentValue(event.arg2)
 
  let result = arg1_value + arg2_value
  
  return {
    statusCode: 200,
    body: JSON.stringify(result)
  }
}
