export {default as middleware} from 'next-auth/middleware';
//protect route file
export const config={
    matcher:['/properties/add',
        '/profile','/properties/saved'
        ,'/messages'],
};