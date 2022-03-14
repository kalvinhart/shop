const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require("../models/userModel");

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const jwtStrategy = new JwtStrategy(options, async (payload, done) => {
  try {
    const user = await User.findOne({ _id: payload.id });
    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  } catch (err) {
    done(err, false);
  }
});

module.exports = jwtStrategy;
