module.exports = ({ env }) => ({
    upload: {
        provider: 'aws-s3',
        providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('TE8YGsvszN2DHz8J1VKrTm+7+VI5IBpT7XFjr5nw'),
        region: 'AWS_REGION',
        params: {
            Bucket: 'AWS_BUCKET_NAME',
        },
        },
    },
});