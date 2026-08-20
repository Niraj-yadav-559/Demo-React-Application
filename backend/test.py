import psycopg


DB_CONFIG = {
    "host": "training.alignedautomation.com",
    "port": 5432,
    "dbname": "local_db",
    "user": "localuser",
    "password": "localuser",
}


def test_database():
    print("Testing PostgreSQL connection...")
    print(f"Host: {DB_CONFIG['host']}")
    print(f"Port: {DB_CONFIG['port']}")
    print(f"Database: {DB_CONFIG['dbname']}")
    print(f"User: {DB_CONFIG['user']}")
    print("-" * 50)

    try:
        connection = psycopg.connect(
            host=DB_CONFIG["host"],
            port=DB_CONFIG["port"],
            dbname=DB_CONFIG["dbname"],
            user=DB_CONFIG["user"],
            password=DB_CONFIG["password"],
            connect_timeout=10,
        )

        print("✅ PostgreSQL connection successful!")

        with connection.cursor() as cursor:
            cursor.execute("SELECT version();")
            version = cursor.fetchone()

            print("\nPostgreSQL version:")
            print(version[0])

            cursor.execute("SELECT current_database();")
            database = cursor.fetchone()

            print("\nConnected database:")
            print(database[0])

        connection.close()

        print("\n✅ Database test completed successfully.")

    except psycopg.OperationalError as e:
        print("\n❌ PostgreSQL connection failed.")
        print("Error:")
        print(e)

    except Exception as e:
        print("\n❌ Unexpected error.")
        print("Error:")
        print(e)


if __name__ == "__main__":
    test_database()