'use strict';

module.exports = {
	up: function (queryInterface, Sequelize) {
		return queryInterface.createTable('server_logging',
			{
				id: {
					type: Sequelize.UUID,
					field: 'id',
					primaryKey: true,
					unique: true,
					defaultValue: Sequelize.UUIDV4
				},
				module: {
					type: Sequelize.STRING
				},
				description: {
					type: Sequelize.STRING
				},
				createdAt: {
					type: Sequelize.DATE,
					defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
				},
				updatedAt: {
					type: Sequelize.DATE,
					defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
				}
			});
	},
	down: function (queryInterface, Sequelize) {
		return queryInterface.dropTable('server_logging');
	}
};