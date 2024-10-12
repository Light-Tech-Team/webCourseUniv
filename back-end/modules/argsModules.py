from flask_restful import  reqparse
import werkzeug
course_post_args = reqparse.RequestParser()
#course_post_args.add_argument('id', type=int, required=True, help='id manquant')
# course_post_args.add_argument('courseName', type=str, required=True, help='courseNamee manquant')
course_post_args.add_argument ('file',  type=werkzeug.datastructures.FileStorage,location="files"  )
#course_post_args.add_argument('idModule', type=int, required=True, help='idModule manquant')
