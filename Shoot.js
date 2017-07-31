var projectile : Rigidbody;
var speed = 1000;

function Update ()
	{
		if (Input.GetButtonDown ("Fire1"))
		{
			clone = Instantiate(projectile, transform.position, transform.rotation);
			clone.velocity = transform.TransformDirection(Vector3 (0, 0, speed));

			Destroy (clone.GameObject, 15);
		    GetComponent.<AudioSource>().Play();
		    GetComponent.<ParticleSystem>().Play();
	 	}
	 }
