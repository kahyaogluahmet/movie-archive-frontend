import React from 'react';

type Prop = {
    username:string
    comment:string
}

const comments: Prop[] = [
  {
    username: 'kişi ismi',
    comment: 'comment',
  },
  {
    username: 'kişi ismi',
    comment: 'comment',
  },
  {
    username: 'kişi ismi',
    comment: 'comment',
  },
  {
    username: 'kişi ismi',
    comment: 'comment',
  },
  {
    username: 'kişi ismi',
    comment: 'comment',
  },
];

function Comments() {
  return (
    <div className="container lg:max-w-[1024px] mx-auto mt-20  ">
      <div className="flex gap-10 items-center mb-20  ">
        <div className=" bg-[#C2D9FF] w-[800px] h-40 rounded-xl p-4">
          <textarea
            className="bg-inherit outline-none resize-none w-[700px] "
            name=""
            id=""
            placeholder="Yorum yaz"
          ></textarea>
          <div className="flex items-center h-20  ">
            <input
              className="bg-red-400 mr-2"
              type="checkbox"
              name=""
              id=""
            />
            Spoiler var.
          </div>
        </div>
        <div>
          <button className="bg-[#6196A6] text-white px-6 py-4 text-xl    inline ml-auto  rounded-full ">
            Paylaş
          </button>
        </div>
      </div>
      {comments.map((comment,i) => {
        return (
          <div key={i} className="bg-[#C2D9FF] w-[800px] rounded-xl p-4 mt-10">
            <header className="mb-5">
              <span>{comment.username}</span>
            </header>
            {comment.comment}
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
