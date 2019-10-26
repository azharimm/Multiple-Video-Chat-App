export const setName = (state, name) => {
    state.state.name = name
}

export const addPeer = (state, {video, peer}) => {
    state.clients.push({video, peer})
}

export const removePeer = (state, peer) => {
    state.clients = state.clients.filter((p) => {
        return p.peer.id !== peer.id
    })
}

export const setMuted = (state, value) => {
    state.state.muted = value
}

export const setPaused = (state, value) => {
    state.state.paused = value
}

