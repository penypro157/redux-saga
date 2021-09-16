export const style = (theme) => ({
    taskItem: {
        margin: theme.spacing(1)
    },
    actionButton: {
        float: "right"
    },
    formInput: {
        margin: theme.spacing(1),
        width: 300
    },
    loading: {
        position: 'absolute',
        display: 'block',
        margin: 'auto',
        left: '50%',
        top: '50%',
    },
    divLoading: {
        position: 'fixed',
        zIndex: 999,
        width: '100%',
        height: '100%',
        opacity: 0.5,
        background: 'black',
    }
})