var assert = require('assert');
var countdown = require('../countdown.js');
var sinon = require('sinon');

describe('Get countdown response object', function(){
    it('should have a getResponse Method', function(){
        assert.equal(typeof countdown, 'object');
        assert.equal(typeof countdown.getResponse, 'function');
    });
    it('getResponse("2017/08/15") should return {"days": "050", "hours": "01", "minutes": "01", "seconds": "01"}', function(){
        clock = sinon.useFakeTimers(new Date(2017,5,25,22,58,59).getTime());

        assert.deepEqual(
                {
                    'days': '050',
                    'hours': '01',
                    'minutes': '01',
                    'seconds': '01'
                },
                countdown.getResponse('2017/08/15')
                );
        clock.restore();
    });
    it('getResponse("2017/08/16") should return {"days": "51", "hours": "01", "minutes": "01", "seconds": "01"}', function(){
        clock = sinon.useFakeTimers(new Date(2017,5,25,22,58,59).getTime());
        assert.deepEqual(
                {
                    'days': '051',
                    'hours': '01',
                    'minutes': '01',
                    'seconds': '01'
                },
                countdown.getResponse('2017/08/16')
                );

        clock.restore();
    });
    it('getResponse("2017/08/16") should return {"days": "416", "hours": "01", "minutes": "01", "seconds": "01"}', function(){
        clock = sinon.useFakeTimers(new Date(2016,5,25,22,58,59).getTime());
        assert.deepEqual(
                {
                    'days': '416',
                    'hours': '01',
                    'minutes': '01',
                    'seconds': '01'
                },
                countdown.getResponse('2017/08/16')
                );

        clock.restore();
    });
    it('getResponse("2018/08/16") should return {"days": "0", "hours": "0", "minutes": "0", "seconds": "0"}', function(){
        clock = sinon.useFakeTimers(new Date(2018,5,26,0,58,59).getTime());
        assert.deepEqual(
                {
                    'days': '000',
                    'hours': '00',
                    'minutes': '00',
                    'seconds': '00'
                },
                countdown.getResponse('2017/08/16')
                );

        clock.restore();
    });
});  
