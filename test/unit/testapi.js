var should = require("should");
var request = require('supertest')("https://dev.cairea.com");
var expect = require("chai").expect;
var baseUrl = "https://devres.cairea.com";
var util = require("util");
const nock = require("nock");
//var commonHeaders ={"authorization":"aTqXqzhuowdYyv2jz7CIOv66pCoaIO4x"}
describe('checking HotDeals properties', function() {
    it('returns property names', function(done) {
        nock("https://dev.cairea.com")
            .get("/api/hot-deals/")
            .reply(200, { "status": 200, "name": "duluf" });
        request.get("/api/hot-deals/")
            .end(function(err, res) {
                expect(res.body.status).to.equal(200);
                expect(res.body.name).to.equal("duluf");
                done();
            })
    })
     it('returns property address ', function(done) {
        nock("https://dev.cairea.com")
            .get("/api/hot-deals/")
            .reply(200, { "status": 200, "id": 6 ,"address":"3039 Amwiler Road NW Atlanta, Georgia 30360"});
        request.get("/api/hot-deals/")
            .end(function(err, res) {
                expect(res.body.status).to.equal(200);
                expect(res.body.id).to.equal(6);
                expect(res.body.address).to.equal("3039 Amwiler Road NW Atlanta, Georgia 30360")
                done();
            })
    })
})
describe('checking HotDeals properties details', function() {
    it('returns property names', function(done) {
        nock("https://dev.cairea.com")
            .get("/api/hot-deals/10/")
            .reply(200, { "status": 200, "property_name": "towers" });
        request.get("/api/hot-deals/10/")
            .end(function(err, res) {
                expect(res.body.status).to.equal(200);
                expect(res.body.property_name).to.equal("towers");
                done();
            })
    })
     it('returns property  image ', function(done) {
        nock("https://dev.cairea.com")
            .get("/api/hot-deals/")
            .reply(200, { "status": 200, "main_image":"https://cairea-webapp.s3.amazonaws.com/advanced_images/download_1.jpeg"});
        request.get("/api/hot-deals/")
            .end(function(err, res) {
                expect(res.body.status).to.equal(200);
                expect(res.body.main_image).to.equal("https://cairea-webapp.s3.amazonaws.com/advanced_images/download_1.jpeg")
                done();
            })
    })
})
describe('checking HotDeals section details', function() {
    it('returns section names', function(done) {
        nock("https://dev.cairea.com")
            .get("/api/hot-deals/10/area/")
            .reply(200, { "status": 200, "title": "area" });
        request.get("/api/hot-deals/10/area/")
            .end(function(err, res) {
                expect(res.body.status).to.equal(200);
                expect(res.body.title).to.equal("area");
                done();
            })
    })
      it('returns section names', function(done) {
        nock("https://dev.cairea.com")
            .get("/api/hot-deals/10/area/")
            .reply(200, { "status": 200, "backButton": "VISIBLE" });
        request.get("/api/hot-deals/10/area/")
            .end(function(err, res) {
                expect(res.body.status).to.equal(200);
                expect(res.body.backButton).to.equal("VISIBLE");
                done();
            })
    })
      it('returns section names', function(done) {
        nock("https://dev.cairea.com")
            .get("/api/hot-deals/10/area/")
            .reply(200, { "status": 200, "image": "https://cairea-webapp.s3.amazonaws.com/adv_template_main_images/2.jpg" });
        request.get("/api/hot-deals/10/area/")
            .end(function(err, res) {
                expect(res.body.status).to.equal(200);
                expect(res.body.image).to.equal("https://cairea-webapp.s3.amazonaws.com/adv_template_main_images/2.jpg");
                done();
            })
    })
})