const env = process.env;

export const nodeEnv = env.nodeEnv || 'development'

export default{
    mongodbUri: 'mongodb://localhost:27017/test',
    port: env.port || 8080,
    host: env.HSOT || '0.0.0.0',
    get serverUrl(){
        return `http://${this.host}:${this.port}`;
    }
};

export const logStars = function(message){
    console.info('***********');
    console.info(message);
    console.info('************');
};