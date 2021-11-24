import React, {Fragment} from 'react'

const Member = (data) => {

    return (
        <Fragment>
            <div className="col-md-3">
                <div className="card shadow my-2">
                    <img src={ data.user.avatar_url } alt="" />
                    <div className="card-body">
                        <h2>{ data.user.login }</h2>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Member
