module.exports = {
    // print debug statements
    'debug': false,

	'serverPort': process.env.PORT || 80,
	'maxConnections': 100,

	// milliseconds, 0 indicates no timeout
	// this is controller's way of noticing a lost connection
	'socketTimeout': 30000,

	// false indicates the server should disconnect
	// after a successful credential update
	'keepClientsConnected': true,

	// allow legacy access request type
	// Legacy access request means the SPA packet specifies
	// the port to open along with detailed NAT instructions
	// if applicable. This mode is not secure because the
	// client can be NAT'ed to anywhere it requests if NAT
	// is enabled.
	'allowLegacyAccessRequests': false,

	// can create these using ./setup/create-certs.sh
	'serverCert': './path/server.crt',
	'serverKey':  './path/server.key',

	// to be prompted for a password, set this field
	// to a null string using '' (that's 2 single quotes
	// with no spaces between)
	'serverKeyPassword': 'password',
	'serverKeyPasswordRequired': true,

	// can create these using ./setup/create-certs.sh
	'caCert': './path/ca.crt',
	'caKey': './path/ca.key',

	// to be prompted for a password, delete this field or
	// set it to a null string using '' (that's 2 single 
	// quotes with no spaces between)
	'caKeyPassword': 'password',
	'caKeyPasswordRequired': true,

	// how many days new certificates should be good for
	'daysToExpiration': 31,

    // SPA encryption key length in bytes, range is 64 to 256
    'encryptionKeyLen': 256,

	// SPA HMAC key length in bytes, range is 4 to 128
	'hmacKeyLen': 128,

	// database options
	'dbHost': 'us-cdbr-east-03.cleardb.com',
	'dbUser': 'bef5a8932e6326',
	'dbPasswordRequired': true,

	// to be prompted for a password, delete this field or
	// set it to a null string using '' (that's 2 single 
	// quotes with no spaces between)
    'dbPassword': '019d3f56',
    'dbName': 'heroku_b0dabb6f5d92a54',

    // if any of these are exceeded, the controller 
    // disconnects from the client
    'maxDataTransmitTries': 3,
    'maxCredentialMakerTries': 3,
    'maxBadMessages': 3,
    
    // retry interval (milliseconds) for database failures
    'databaseRetryInterval': 5000,
    'databaseMaxRetries': 5,
    
    // interval (milliseconds) to check database for changes
    // that require sending updates to gateways
    'databaseMonitorInterval': 3000,
    
};
