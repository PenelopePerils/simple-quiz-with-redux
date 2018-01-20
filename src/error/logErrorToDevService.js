export default function logErrorToDevService(error, info) {

    // @TO-DO: in the future, save data in a service like https://sentry.io/
    console.log('componentDidCatch caught an error')
    console.log('error', error)
    console.log('info', info)
}