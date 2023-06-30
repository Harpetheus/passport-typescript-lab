import { Strategy as GitHubStrategy } from 'passport-github2';
import { PassportStrategy } from '../../interfaces/index';
import { Request, } from 'express';
import { GitHubPro } from '../../interfaces/ghprofile';
import dotenv from "dotenv";
dotenv.config();

const githubStrategy: GitHubStrategy = new GitHubStrategy(
    {
        clientID: process.env.CLIENT_ID || '',
        clientSecret: process.env.CLIENT_SECRET || '',
        callbackURL: process.env.CALLBACK_URL || '',
        passReqToCallback: true,
    },
    
    /* FIX ME 😭 */
    async (req: Request, accessToken: String, refreshToken: String, profile: GitHubPro, done: (err: any, user?: Express.User)=> void) => {},
);

const passportGitHubStrategy: PassportStrategy = {
    name: 'github',
    strategy: githubStrategy,
};

export default passportGitHubStrategy;
