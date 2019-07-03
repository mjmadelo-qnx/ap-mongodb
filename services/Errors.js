module.exports = {
    get: function (tag) {
      var errors = {
        MISSING_INVALID_PARAMS: { 
          status: 400, 
          error: { 
            code: -1, 
            message: 'Missing/invalid parameters.', 
            params: [] 
          } 
        },
        INTERNAL_SERVER_ERROR: {
          status: 500, 
          error: {
            code: -2, 
            message: 'Internal server error.'
          }
        },
        NOT_FOUND: {
          status: 404, 
          error: { 
            code: -3, 
            message: "Not found."
          }
        },
        UNSUPPORTED_MEDIA_TYPE: {
          status: 415,
          error: {
              code: -4,
              message: 'Unsupported Media Type'
          }                
        },
        FOLDER_NOT_FOUND: {
            status: 404,
            error: {
                code: -5,
                message: 'Folder not found.'
            }
        },
        FILE_NOT_FOUND: {
            status: 404,
            error: {
                code: -6,
                message: 'File not found.'
            }
        },
        DB_ERROR: { 
          status: 500, 
          error: { 
            code: -4, 
            message: "Database error/unavailable."
          }
        },
        QUERY_NOT_RECOGNIZED: {
          status: 404,
          error: {
            code: -7,
            message: 'Query parameter not recognized.'
          }                
        },
        SERVER_ERROR: {
          status: 500,
          error: {
            code: -8,
            message: 'Server unreachable.'
          }
        },
        SERVICE_ERROR: {
          status: 500,
          error: {
            code: -9,
            message: 'Service error/unavailable.'
          }
        },
        INVALID_BLOCKCHAIN_CREDENTIALS: {
          status: 403,
          error: {
            code: -10,
            message: 'Participant ID or Account Key is incorrect.'
          }          
        },
        INVALID_BLOCKCHAIN_AMOUNT: {
          status: 403,
          error: {
            code: -11,
            message: 'Amount is invalid.'
          }          
        },
        BLOCKCHAIN_TRANSACTION_NOT_FOUND: {
          status: 404,
          error: {
            code: -12,
            message: 'Blockchain Transaction not found.'
          }
        },
        BLOCKCHAIN_PARTICIPANT_NOT_FOUND: {
          status: 404,
          error: {
            code: -13,
            message: 'Blockchain Participant not found.'
          }
        },
        UNAUTHORIZED_ACCESS: {
          status: 401,
          error: {
            code: -14,
            message: 'Unauthorized Access.'
          }
        },
        PLAY_CONVERGENTID_TAKEN: {
          status: 403,
          error: {
              code: -15,
              message: 'ConvergentId already taken. Try to use another one.'
          }                
        },
        PLAY_CONVERGENTID_NOT_FOUND: {
          status: 404,
          error: {
              code: -16,
              message: 'ConvergentId not found.'
          }                
        },
        MALFORMED_PATH: {
          status: 400,
          error: {
            code: -17,
            message: 'Invalid request. Malformed path found.'
          }
        },
        CARDLESS_ACCOUNT_NOT_FOUND: {
          status: 404,
          error: {
            code: -18,
            message: 'Cardless Account not found.'
          }
        },
        CARDLESS_ACCOUNT_TAKEN: {
          status: 404,
          error: {
            code: -19,
            message: 'Account number already taken. Try to use another one.'
          }
        },
        CARDLESS_EXPIRED_CREDENTIALS: {
          status: 404,
          error: {
            code: -20,
            message: 'cashCode and cashOtp already expired.'
          }
        },
        CARDLESS_INVALID_CREDENTIALS: {
          status: 404,
          error: {
            code: -21,
            message: 'cashCode/cashOtp/amount is invalid.'
          }
        },
        SMC_REPORTS_NOT_FOUND: {
          status: 404,
          error: {
            code: -22,
            message: 'Records not found'
          }
        },
        AWS_ERROR: {
          status: 400,
          error: {
            code: -23,
            message: 'Error from AWS endpoint.'
          }
        },
        PLAY_VOUCHERCODE_NOT_FOUND: {
          status: 400,
          error: {
            code: -24,
            message: 'Voucher Code not found.'
          }
        },
        PLAY_VOUCHERCODE_TAKEN: {
          status: 400,
          error: {
            code: -24,
            message: 'Voucher Code already taken. Try to use another one.'
          }
        },
        I2C_INVALID_CARD: {
          status: 400,
          error: {
            code: -25,
            message: 'Card Number should be 16-digits'
          }
        },
        I2C_INVALID_PIN: {
          status: 400,
          error: {
            code: -26,
            message: 'PIN should be 6-digits'
          }
        },
        BANKWIDE_ERROR: {
          status: 400,
          error: {
            code: -27,
            message: 'Missing/Invalid parameters.'
          }
        },
        BANKWIDE_ITEM_NOTFOUND: {
          status: 400,
          error: {
            code: -28,
            message: 'Item not found.'
          }
        },
        BANKWIDE_CUSTOMER_NOTFOUND: {
          status: 400,
          error: {
            code: -29,
            message: 'Customer not found.'
          }
        },
        AGENT_TRIGGERED_NOTFOUND: {
          status: 400,
          error: {
            code: -30,
            message: 'Customer records not found.'
          }
        },
        KEY_NOT_FOUND: {
          status: 400,
          error: {
            code: -31,
            message: 'Key not found.'
          }
        },
        SECRET_NOT_FOUND: {
          status: 400,
          error: {
            code: -32,
            message: 'Secret not found.'
          }
        },
        INVALID_TIN: {
          status: 400,
          error: {
            code: -33,
            message: 'Invalid TIN.'
          }
        },
        SERVICE_CODE_NOT_FOUND: {
          status: 400,
          error: {
            code: -33,
            message: 'Service Code not Found.'
          }
        }
      };
      return errors[tag];
    },
    raise: function (e) {
      var error = JSON.parse(JSON.stringify(this.get(e)));
      return error;
    },
    getParam: function (tag) {
      var params = {
        biller_id: {
          field: 'biller_id',
          desc: 'Enter a valid biller id.'
        },
      };
      return params[tag];
    },
    getSpiel: function (tag) {
      var spiels = {
        SERVICE_UNAVAILABLE: 'We could not connect you to the service at the moment, please try again in a few minutes.',
        SERVICE_ERROR: 'We had a problem processing your request, please try again in a few minutes.',
      };
      return spiels[tag];
    }
  };
  
