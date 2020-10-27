const assert = require('assert')
const moment = require('moment')
const chai = require('chai')
const request = require('supertest')
const sinon = require('sinon')
const should = chai.should()
const { expect } = require('chai')

const app = require('../app')

describe('# 測試環境初始化', function() {
    
  context('# First Test Case', () => {

    it(" GET /admin/users ", (done) => {
        request(app)
          .get('/')
          .end(function(err, res) {
            done()
        });
    });

  })
})