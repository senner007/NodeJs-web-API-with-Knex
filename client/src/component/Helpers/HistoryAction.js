import axios from 'axios'

const HistoryAction = (history) => {
    return {
        goToRoot() {
            history.push('/');
        }
    }
} 

export default HistoryAction;