<?php

namespace App\Http\Controllers\Components;

use App\Models\Permission;

class PermissionController
{
	public function get()
	{
    // TODO implement searchable and pagination
		$query = Permission::get();

		return response()->json($query, 200);
	}
}
