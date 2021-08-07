'use strict';

class homeController {
    Index(req, res) {
        res.json({
            message: 'Behold The MEVN Stack!'
        });
    }
}
module.exports = new homeController();